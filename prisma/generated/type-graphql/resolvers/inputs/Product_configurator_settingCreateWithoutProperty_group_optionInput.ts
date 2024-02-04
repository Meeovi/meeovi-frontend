import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedOneWithoutProduct_configurator_settingInput } from "../inputs/MediaCreateNestedOneWithoutProduct_configurator_settingInput";
import { ProductCreateNestedOneWithoutProduct_configurator_settingInput } from "../inputs/ProductCreateNestedOneWithoutProduct_configurator_settingInput";

@TypeGraphQL.InputType("Product_configurator_settingCreateWithoutProperty_group_optionInput", {})
export class Product_configurator_settingCreateWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  price?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutProduct_configurator_settingInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_configurator_settingInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_configurator_settingInput;
}
