import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityScalarWhereInput } from "../inputs/Custom_entityScalarWhereInput";
import { Custom_entityUpdateManyMutationInput } from "../inputs/Custom_entityUpdateManyMutationInput";

@TypeGraphQL.InputType("Custom_entityUpdateManyWithWhereWithoutPluginInput", {})
export class Custom_entityUpdateManyWithWhereWithoutPluginInput {
  @TypeGraphQL.Field(_type => Custom_entityScalarWhereInput, {
    nullable: false
  })
  where!: Custom_entityScalarWhereInput;

  @TypeGraphQL.Field(_type => Custom_entityUpdateManyMutationInput, {
    nullable: false
  })
  data!: Custom_entityUpdateManyMutationInput;
}
