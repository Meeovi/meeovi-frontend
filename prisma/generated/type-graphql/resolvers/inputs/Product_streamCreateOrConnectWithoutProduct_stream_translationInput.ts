import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateWithoutProduct_stream_translationInput } from "../inputs/Product_streamCreateWithoutProduct_stream_translationInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamCreateOrConnectWithoutProduct_stream_translationInput", {})
export class Product_streamCreateOrConnectWithoutProduct_stream_translationInput {
  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: false
  })
  where!: Product_streamWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_stream_translationInput, {
    nullable: false
  })
  create!: Product_streamCreateWithoutProduct_stream_translationInput;
}
