import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadUpdateWithoutProductInput } from "../inputs/Product_downloadUpdateWithoutProductInput";
import { Product_downloadWhereUniqueInput } from "../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Product_downloadUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_downloadUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Product_downloadWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_downloadUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_downloadUpdateWithoutProductInput;
}
