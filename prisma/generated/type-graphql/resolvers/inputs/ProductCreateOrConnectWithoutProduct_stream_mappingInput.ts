import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_stream_mappingInput } from "../inputs/ProductCreateWithoutProduct_stream_mappingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_stream_mappingInput", {})
export class ProductCreateOrConnectWithoutProduct_stream_mappingInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_stream_mappingInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_stream_mappingInput;
}
