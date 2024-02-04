import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterCreateWithoutProduct_streamInput } from "../inputs/Product_stream_filterCreateWithoutProduct_streamInput";
import { Product_stream_filterWhereUniqueInput } from "../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_filterCreateOrConnectWithoutProduct_streamInput", {})
export class Product_stream_filterCreateOrConnectWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_filterWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_filterCreateWithoutProduct_streamInput, {
    nullable: false
  })
  create!: Product_stream_filterCreateWithoutProduct_streamInput;
}
