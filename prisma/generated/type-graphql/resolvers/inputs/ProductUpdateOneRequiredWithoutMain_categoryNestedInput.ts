import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutMain_categoryInput } from "../inputs/ProductCreateOrConnectWithoutMain_categoryInput";
import { ProductCreateWithoutMain_categoryInput } from "../inputs/ProductCreateWithoutMain_categoryInput";
import { ProductUpdateToOneWithWhereWithoutMain_categoryInput } from "../inputs/ProductUpdateToOneWithWhereWithoutMain_categoryInput";
import { ProductUpsertWithoutMain_categoryInput } from "../inputs/ProductUpsertWithoutMain_categoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutMain_categoryNestedInput", {})
export class ProductUpdateOneRequiredWithoutMain_categoryNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutMain_categoryInput, {
    nullable: true
  })
  create?: ProductCreateWithoutMain_categoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutMain_categoryInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutMain_categoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutMain_categoryInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutMain_categoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutMain_categoryInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutMain_categoryInput | undefined;
}
