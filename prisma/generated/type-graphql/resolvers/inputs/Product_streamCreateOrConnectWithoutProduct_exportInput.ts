import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateWithoutProduct_exportInput } from "../inputs/Product_streamCreateWithoutProduct_exportInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamCreateOrConnectWithoutProduct_exportInput", {})
export class Product_streamCreateOrConnectWithoutProduct_exportInput {
  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: false
  })
  where!: Product_streamWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_exportInput, {
    nullable: false
  })
  create!: Product_streamCreateWithoutProduct_exportInput;
}
