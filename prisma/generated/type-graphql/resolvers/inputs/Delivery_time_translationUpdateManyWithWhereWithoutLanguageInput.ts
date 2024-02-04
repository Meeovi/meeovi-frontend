import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationScalarWhereInput } from "../inputs/Delivery_time_translationScalarWhereInput";
import { Delivery_time_translationUpdateManyMutationInput } from "../inputs/Delivery_time_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Delivery_time_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Delivery_time_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Delivery_time_translationScalarWhereInput, {
    nullable: false
  })
  where!: Delivery_time_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Delivery_time_translationUpdateManyMutationInput;
}
