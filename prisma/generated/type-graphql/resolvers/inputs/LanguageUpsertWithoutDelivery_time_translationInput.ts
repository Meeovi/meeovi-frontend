import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutDelivery_time_translationInput } from "../inputs/LanguageCreateWithoutDelivery_time_translationInput";
import { LanguageUpdateWithoutDelivery_time_translationInput } from "../inputs/LanguageUpdateWithoutDelivery_time_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutDelivery_time_translationInput", {})
export class LanguageUpsertWithoutDelivery_time_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutDelivery_time_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutDelivery_time_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutDelivery_time_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutDelivery_time_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
