import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutMain_categoryInput } from "../inputs/ProductCreateWithoutMain_categoryInput";
import { ProductUpdateWithoutMain_categoryInput } from "../inputs/ProductUpdateWithoutMain_categoryInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutMain_categoryInput", {})
export class ProductUpsertWithoutMain_categoryInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutMain_categoryInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutMain_categoryInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutMain_categoryInput, {
    nullable: false
  })
  create!: ProductCreateWithoutMain_categoryInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
