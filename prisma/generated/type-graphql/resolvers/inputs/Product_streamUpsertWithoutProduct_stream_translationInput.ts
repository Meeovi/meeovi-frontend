import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateWithoutProduct_stream_translationInput } from "../inputs/Product_streamCreateWithoutProduct_stream_translationInput";
import { Product_streamUpdateWithoutProduct_stream_translationInput } from "../inputs/Product_streamUpdateWithoutProduct_stream_translationInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpsertWithoutProduct_stream_translationInput", {})
export class Product_streamUpsertWithoutProduct_stream_translationInput {
  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutProduct_stream_translationInput, {
    nullable: false
  })
  update!: Product_streamUpdateWithoutProduct_stream_translationInput;

  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_stream_translationInput, {
    nullable: false
  })
  create!: Product_streamCreateWithoutProduct_stream_translationInput;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;
}
