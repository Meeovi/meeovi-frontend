import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_mediaInput } from "../inputs/ProductCreateOrConnectWithoutProduct_mediaInput";
import { ProductCreateWithoutProduct_mediaInput } from "../inputs/ProductCreateWithoutProduct_mediaInput";
import { ProductUpdateToOneWithWhereWithoutProduct_mediaInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_mediaInput";
import { ProductUpsertWithoutProduct_mediaInput } from "../inputs/ProductUpsertWithoutProduct_mediaInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_mediaNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_mediaNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_mediaInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_mediaInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_mediaInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_mediaInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_mediaInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_mediaInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_mediaInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_mediaInput | undefined;
}
