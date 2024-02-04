import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateWithoutCategoryInput } from "../inputs/Product_streamCreateWithoutCategoryInput";
import { Product_streamUpdateWithoutCategoryInput } from "../inputs/Product_streamUpdateWithoutCategoryInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpsertWithoutCategoryInput", {})
export class Product_streamUpsertWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: Product_streamUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => Product_streamCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Product_streamCreateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;
}
