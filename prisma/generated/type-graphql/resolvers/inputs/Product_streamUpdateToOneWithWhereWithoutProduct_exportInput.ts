import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamUpdateWithoutProduct_exportInput } from "../inputs/Product_streamUpdateWithoutProduct_exportInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpdateToOneWithWhereWithoutProduct_exportInput", {})
export class Product_streamUpdateToOneWithWhereWithoutProduct_exportInput {
  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutProduct_exportInput, {
    nullable: false
  })
  data!: Product_streamUpdateWithoutProduct_exportInput;
}
