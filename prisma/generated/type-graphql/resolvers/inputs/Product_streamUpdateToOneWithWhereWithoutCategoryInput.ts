import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamUpdateWithoutCategoryInput } from "../inputs/Product_streamUpdateWithoutCategoryInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpdateToOneWithWhereWithoutCategoryInput", {})
export class Product_streamUpdateToOneWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: Product_streamUpdateWithoutCategoryInput;
}
