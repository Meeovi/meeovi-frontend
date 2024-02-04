import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_tagInput } from "../inputs/ProductCreateOrConnectWithoutProduct_tagInput";
import { ProductCreateWithoutProduct_tagInput } from "../inputs/ProductCreateWithoutProduct_tagInput";
import { ProductUpdateToOneWithWhereWithoutProduct_tagInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_tagInput";
import { ProductUpsertWithoutProduct_tagInput } from "../inputs/ProductUpsertWithoutProduct_tagInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_tagNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_tagNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_tagInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_tagInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_tagInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_tagInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_tagInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_tagInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_tagInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_tagInput | undefined;
}
