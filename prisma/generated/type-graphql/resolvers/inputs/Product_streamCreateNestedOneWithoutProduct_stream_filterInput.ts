import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutProduct_stream_filterInput } from "../inputs/Product_streamCreateOrConnectWithoutProduct_stream_filterInput";
import { Product_streamCreateWithoutProduct_stream_filterInput } from "../inputs/Product_streamCreateWithoutProduct_stream_filterInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamCreateNestedOneWithoutProduct_stream_filterInput", {})
export class Product_streamCreateNestedOneWithoutProduct_stream_filterInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_stream_filterInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutProduct_stream_filterInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutProduct_stream_filterInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutProduct_stream_filterInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;
}
