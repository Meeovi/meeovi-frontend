import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaUpdateWithoutMediaInput } from "../inputs/Product_mediaUpdateWithoutMediaInput";
import { Product_mediaWhereUniqueInput } from "../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Product_mediaUpdateWithWhereUniqueWithoutMediaInput", {})
export class Product_mediaUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Product_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Product_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_mediaUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Product_mediaUpdateWithoutMediaInput;
}
