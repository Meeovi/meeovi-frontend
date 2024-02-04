import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationUpdateWithoutLanguageInput } from "../inputs/Delivery_time_translationUpdateWithoutLanguageInput";
import { Delivery_time_translationWhereUniqueInput } from "../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_time_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Delivery_time_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Delivery_time_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_time_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Delivery_time_translationUpdateWithoutLanguageInput;
}
