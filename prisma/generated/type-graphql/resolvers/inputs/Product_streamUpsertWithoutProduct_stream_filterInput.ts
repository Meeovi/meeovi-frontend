import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateWithoutProduct_stream_filterInput } from "../inputs/Product_streamCreateWithoutProduct_stream_filterInput";
import { Product_streamUpdateWithoutProduct_stream_filterInput } from "../inputs/Product_streamUpdateWithoutProduct_stream_filterInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpsertWithoutProduct_stream_filterInput", {})
export class Product_streamUpsertWithoutProduct_stream_filterInput {
  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutProduct_stream_filterInput, {
    nullable: false
  })
  update!: Product_streamUpdateWithoutProduct_stream_filterInput;

  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_stream_filterInput, {
    nullable: false
  })
  create!: Product_streamCreateWithoutProduct_stream_filterInput;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;
}
