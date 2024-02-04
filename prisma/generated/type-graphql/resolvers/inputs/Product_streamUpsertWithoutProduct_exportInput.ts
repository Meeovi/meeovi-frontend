import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateWithoutProduct_exportInput } from "../inputs/Product_streamCreateWithoutProduct_exportInput";
import { Product_streamUpdateWithoutProduct_exportInput } from "../inputs/Product_streamUpdateWithoutProduct_exportInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpsertWithoutProduct_exportInput", {})
export class Product_streamUpsertWithoutProduct_exportInput {
  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutProduct_exportInput, {
    nullable: false
  })
  update!: Product_streamUpdateWithoutProduct_exportInput;

  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_exportInput, {
    nullable: false
  })
  create!: Product_streamCreateWithoutProduct_exportInput;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;
}
