import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_tagInput } from "../inputs/ProductCreateNestedOneWithoutProduct_tagInput";
import { TagCreateNestedOneWithoutProduct_tagInput } from "../inputs/TagCreateNestedOneWithoutProduct_tagInput";

@TypeGraphQL.InputType("Product_tagCreateInput", {})
export class Product_tagCreateInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_tagInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_tagInput;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutProduct_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutProduct_tagInput;
}
