import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportUpdateWithoutProduct_streamInput } from "../inputs/Product_exportUpdateWithoutProduct_streamInput";
import { Product_exportWhereUniqueInput } from "../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.InputType("Product_exportUpdateWithWhereUniqueWithoutProduct_streamInput", {})
export class Product_exportUpdateWithWhereUniqueWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => Product_exportWhereUniqueInput, {
    nullable: false
  })
  where!: Product_exportWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_exportUpdateWithoutProduct_streamInput, {
    nullable: false
  })
  data!: Product_exportUpdateWithoutProduct_streamInput;
}
