import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutDelivery_time_translationInput } from "../inputs/LanguageCreateOrConnectWithoutDelivery_time_translationInput";
import { LanguageCreateWithoutDelivery_time_translationInput } from "../inputs/LanguageCreateWithoutDelivery_time_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutDelivery_time_translationInput", {})
export class LanguageCreateNestedOneWithoutDelivery_time_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutDelivery_time_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutDelivery_time_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutDelivery_time_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutDelivery_time_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
