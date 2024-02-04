import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryCreateManyCategoryInputEnvelope } from "../inputs/Product_categoryCreateManyCategoryInputEnvelope";
import { Product_categoryCreateOrConnectWithoutCategoryInput } from "../inputs/Product_categoryCreateOrConnectWithoutCategoryInput";
import { Product_categoryCreateWithoutCategoryInput } from "../inputs/Product_categoryCreateWithoutCategoryInput";
import { Product_categoryWhereUniqueInput } from "../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Product_categoryCreateNestedManyWithoutCategoryInput", {})
export class Product_categoryCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [Product_categoryCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Product_categoryCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Product_categoryCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_categoryCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Product_categoryCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_categoryWhereUniqueInput[] | undefined;
}
