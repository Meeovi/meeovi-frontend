import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCreateWithoutLanguageInput } from "../inputs/Delivery_time_translationCreateWithoutLanguageInput";
import { Delivery_time_translationUpdateWithoutLanguageInput } from "../inputs/Delivery_time_translationUpdateWithoutLanguageInput";
import { Delivery_time_translationWhereUniqueInput } from "../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_time_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Delivery_time_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Delivery_time_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_time_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Delivery_time_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Delivery_time_translationCreateWithoutLanguageInput;
}
