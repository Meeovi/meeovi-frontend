import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingScalarWhereInput } from "../inputs/Product_configurator_settingScalarWhereInput";
import { Product_configurator_settingUpdateManyMutationInput } from "../inputs/Product_configurator_settingUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_configurator_settingUpdateManyWithWhereWithoutProductInput", {})
export class Product_configurator_settingUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_configurator_settingScalarWhereInput, {
    nullable: false
  })
  where!: Product_configurator_settingScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_configurator_settingUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_configurator_settingUpdateManyMutationInput;
}
