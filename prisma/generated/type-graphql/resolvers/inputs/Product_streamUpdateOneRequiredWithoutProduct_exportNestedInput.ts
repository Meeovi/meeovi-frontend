import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutProduct_exportInput } from "../inputs/Product_streamCreateOrConnectWithoutProduct_exportInput";
import { Product_streamCreateWithoutProduct_exportInput } from "../inputs/Product_streamCreateWithoutProduct_exportInput";
import { Product_streamUpdateToOneWithWhereWithoutProduct_exportInput } from "../inputs/Product_streamUpdateToOneWithWhereWithoutProduct_exportInput";
import { Product_streamUpsertWithoutProduct_exportInput } from "../inputs/Product_streamUpsertWithoutProduct_exportInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamUpdateOneRequiredWithoutProduct_exportNestedInput", {})
export class Product_streamUpdateOneRequiredWithoutProduct_exportNestedInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_exportInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutProduct_exportInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutProduct_exportInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutProduct_exportInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpsertWithoutProduct_exportInput, {
    nullable: true
  })
  upsert?: Product_streamUpsertWithoutProduct_exportInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateToOneWithWhereWithoutProduct_exportInput, {
    nullable: true
  })
  update?: Product_streamUpdateToOneWithWhereWithoutProduct_exportInput | undefined;
}
