import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterUpdateWithoutProduct_stream_filterInput } from "../inputs/Product_stream_filterUpdateWithoutProduct_stream_filterInput";
import { Product_stream_filterWhereUniqueInput } from "../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_filterUpdateWithWhereUniqueWithoutProduct_stream_filterInput", {})
export class Product_stream_filterUpdateWithWhereUniqueWithoutProduct_stream_filterInput {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_filterWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_filterUpdateWithoutProduct_stream_filterInput, {
    nullable: false
  })
  data!: Product_stream_filterUpdateWithoutProduct_stream_filterInput;
}
