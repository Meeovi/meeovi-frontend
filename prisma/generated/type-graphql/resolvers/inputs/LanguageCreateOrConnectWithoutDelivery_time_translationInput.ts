import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutDelivery_time_translationInput } from "../inputs/LanguageCreateWithoutDelivery_time_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutDelivery_time_translationInput", {})
export class LanguageCreateOrConnectWithoutDelivery_time_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutDelivery_time_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutDelivery_time_translationInput;
}
