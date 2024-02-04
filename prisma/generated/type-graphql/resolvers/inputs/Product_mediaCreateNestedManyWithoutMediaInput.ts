import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaCreateManyMediaInputEnvelope } from "../inputs/Product_mediaCreateManyMediaInputEnvelope";
import { Product_mediaCreateOrConnectWithoutMediaInput } from "../inputs/Product_mediaCreateOrConnectWithoutMediaInput";
import { Product_mediaCreateWithoutMediaInput } from "../inputs/Product_mediaCreateWithoutMediaInput";
import { Product_mediaWhereUniqueInput } from "../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Product_mediaCreateNestedManyWithoutMediaInput", {})
export class Product_mediaCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Product_mediaCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Product_mediaCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Product_mediaCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_mediaCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Product_mediaCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_mediaWhereUniqueInput[] | undefined;
}
