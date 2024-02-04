import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutProduct_stream_filterInput } from "../inputs/Product_streamCreateOrConnectWithoutProduct_stream_filterInput";
import { Product_streamCreateWithoutProduct_stream_filterInput } from "../inputs/Product_streamCreateWithoutProduct_stream_filterInput";
import { Product_streamUpdateToOneWithWhereWithoutProduct_stream_filterInput } from "../inputs/Product_streamUpdateToOneWithWhereWithoutProduct_stream_filterInput";
import { Product_streamUpsertWithoutProduct_stream_filterInput } from "../inputs/Product_streamUpsertWithoutProduct_stream_filterInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamUpdateOneRequiredWithoutProduct_stream_filterNestedInput", {})
export class Product_streamUpdateOneRequiredWithoutProduct_stream_filterNestedInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_stream_filterInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutProduct_stream_filterInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutProduct_stream_filterInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutProduct_stream_filterInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpsertWithoutProduct_stream_filterInput, {
    nullable: true
  })
  upsert?: Product_streamUpsertWithoutProduct_stream_filterInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateToOneWithWhereWithoutProduct_stream_filterInput, {
    nullable: true
  })
  update?: Product_streamUpdateToOneWithWhereWithoutProduct_stream_filterInput | undefined;
}
