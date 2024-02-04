import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutCategoryInput } from "../inputs/Product_streamCreateOrConnectWithoutCategoryInput";
import { Product_streamCreateWithoutCategoryInput } from "../inputs/Product_streamCreateWithoutCategoryInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamCreateNestedOneWithoutCategoryInput", {})
export class Product_streamCreateNestedOneWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutCategoryInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutCategoryInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;
}
