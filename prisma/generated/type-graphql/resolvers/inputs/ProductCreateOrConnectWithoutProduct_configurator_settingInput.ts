import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_configurator_settingInput } from "../inputs/ProductCreateWithoutProduct_configurator_settingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_configurator_settingInput", {})
export class ProductCreateOrConnectWithoutProduct_configurator_settingInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_configurator_settingInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_configurator_settingInput;
}
