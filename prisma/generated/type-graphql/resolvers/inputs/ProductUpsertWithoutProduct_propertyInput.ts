import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_propertyInput } from "../inputs/ProductCreateWithoutProduct_propertyInput";
import { ProductUpdateWithoutProduct_propertyInput } from "../inputs/ProductUpdateWithoutProduct_propertyInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_propertyInput", {})
export class ProductUpsertWithoutProduct_propertyInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_propertyInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_propertyInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_propertyInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_propertyInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
