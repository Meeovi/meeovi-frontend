import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutShipping_methodInput } from "../inputs/MediaCreateOrConnectWithoutShipping_methodInput";
import { MediaCreateWithoutShipping_methodInput } from "../inputs/MediaCreateWithoutShipping_methodInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutShipping_methodInput", {})
export class MediaCreateNestedOneWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutShipping_methodInput, {
    nullable: true
  })
  create?: MediaCreateWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutShipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
