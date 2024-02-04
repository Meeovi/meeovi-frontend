import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutProduct_manufacturerInput } from "../inputs/MediaCreateOrConnectWithoutProduct_manufacturerInput";
import { MediaCreateWithoutProduct_manufacturerInput } from "../inputs/MediaCreateWithoutProduct_manufacturerInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutProduct_manufacturerInput", {})
export class MediaCreateNestedOneWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_manufacturerInput, {
    nullable: true
  })
  create?: MediaCreateWithoutProduct_manufacturerInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutProduct_manufacturerInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutProduct_manufacturerInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
