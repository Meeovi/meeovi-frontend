import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadCreateWithoutProductInput } from "../inputs/Product_downloadCreateWithoutProductInput";
import { Product_downloadUpdateWithoutProductInput } from "../inputs/Product_downloadUpdateWithoutProductInput";
import { Product_downloadWhereUniqueInput } from "../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Product_downloadUpsertWithWhereUniqueWithoutProductInput", {})
export class Product_downloadUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Product_downloadWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_downloadUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_downloadUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_downloadCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_downloadCreateWithoutProductInput;
}
