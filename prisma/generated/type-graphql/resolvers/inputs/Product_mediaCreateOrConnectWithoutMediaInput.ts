import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaCreateWithoutMediaInput } from "../inputs/Product_mediaCreateWithoutMediaInput";
import { Product_mediaWhereUniqueInput } from "../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Product_mediaCreateOrConnectWithoutMediaInput", {})
export class Product_mediaCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => Product_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Product_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_mediaCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Product_mediaCreateWithoutMediaInput;
}
