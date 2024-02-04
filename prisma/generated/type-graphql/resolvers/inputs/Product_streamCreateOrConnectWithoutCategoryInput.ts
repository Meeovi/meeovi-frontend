import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateWithoutCategoryInput } from "../inputs/Product_streamCreateWithoutCategoryInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamCreateOrConnectWithoutCategoryInput", {})
export class Product_streamCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: false
  })
  where!: Product_streamWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_streamCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Product_streamCreateWithoutCategoryInput;
}
