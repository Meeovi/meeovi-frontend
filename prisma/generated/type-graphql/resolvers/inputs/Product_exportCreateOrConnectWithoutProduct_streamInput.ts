import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateWithoutProduct_streamInput } from "../inputs/Product_exportCreateWithoutProduct_streamInput";
import { Product_exportWhereUniqueInput } from "../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.InputType("Product_exportCreateOrConnectWithoutProduct_streamInput", {})
export class Product_exportCreateOrConnectWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => Product_exportWhereUniqueInput, {
    nullable: false
  })
  where!: Product_exportWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_exportCreateWithoutProduct_streamInput, {
    nullable: false
  })
  create!: Product_exportCreateWithoutProduct_streamInput;
}
