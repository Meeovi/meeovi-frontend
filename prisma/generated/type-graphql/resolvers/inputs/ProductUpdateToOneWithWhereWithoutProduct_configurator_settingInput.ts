import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_configurator_settingInput } from "../inputs/ProductUpdateWithoutProduct_configurator_settingInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_configurator_settingInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_configurator_settingInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_configurator_settingInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_configurator_settingInput;
}
