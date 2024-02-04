import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadCreateManyMediaInputEnvelope } from "../inputs/Product_downloadCreateManyMediaInputEnvelope";
import { Product_downloadCreateOrConnectWithoutMediaInput } from "../inputs/Product_downloadCreateOrConnectWithoutMediaInput";
import { Product_downloadCreateWithoutMediaInput } from "../inputs/Product_downloadCreateWithoutMediaInput";
import { Product_downloadWhereUniqueInput } from "../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Product_downloadCreateNestedManyWithoutMediaInput", {})
export class Product_downloadCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Product_downloadCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Product_downloadCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Product_downloadCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_downloadCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Product_downloadCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_downloadWhereUniqueInput[] | undefined;
}
