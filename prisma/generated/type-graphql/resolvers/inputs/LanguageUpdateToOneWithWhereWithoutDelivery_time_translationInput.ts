import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutDelivery_time_translationInput } from "../inputs/LanguageUpdateWithoutDelivery_time_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutDelivery_time_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutDelivery_time_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutDelivery_time_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutDelivery_time_translationInput;
}
