import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_configurator_settingInput } from "../inputs/ProductCreateWithoutProduct_configurator_settingInput";
import { ProductUpdateWithoutProduct_configurator_settingInput } from "../inputs/ProductUpdateWithoutProduct_configurator_settingInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_configurator_settingInput", {})
export class ProductUpsertWithoutProduct_configurator_settingInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_configurator_settingInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_configurator_settingInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_configurator_settingInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_configurator_settingInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
