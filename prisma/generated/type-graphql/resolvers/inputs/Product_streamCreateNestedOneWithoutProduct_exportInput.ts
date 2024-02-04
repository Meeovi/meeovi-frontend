import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutProduct_exportInput } from "../inputs/Product_streamCreateOrConnectWithoutProduct_exportInput";
import { Product_streamCreateWithoutProduct_exportInput } from "../inputs/Product_streamCreateWithoutProduct_exportInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamCreateNestedOneWithoutProduct_exportInput", {})
export class Product_streamCreateNestedOneWithoutProduct_exportInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_exportInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutProduct_exportInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutProduct_exportInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutProduct_exportInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;
}
