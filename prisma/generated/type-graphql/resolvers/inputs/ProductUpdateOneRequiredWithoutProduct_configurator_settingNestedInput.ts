import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_configurator_settingInput } from "../inputs/ProductCreateOrConnectWithoutProduct_configurator_settingInput";
import { ProductCreateWithoutProduct_configurator_settingInput } from "../inputs/ProductCreateWithoutProduct_configurator_settingInput";
import { ProductUpdateToOneWithWhereWithoutProduct_configurator_settingInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_configurator_settingInput";
import { ProductUpsertWithoutProduct_configurator_settingInput } from "../inputs/ProductUpsertWithoutProduct_configurator_settingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_configurator_settingNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_configurator_settingNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_configurator_settingInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_configurator_settingInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_configurator_settingInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_configurator_settingInput | undefined;
}
