import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutPayment_methodInput } from "../inputs/MediaCreateOrConnectWithoutPayment_methodInput";
import { MediaCreateWithoutPayment_methodInput } from "../inputs/MediaCreateWithoutPayment_methodInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutPayment_methodInput", {})
export class MediaCreateNestedOneWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutPayment_methodInput, {
    nullable: true
  })
  create?: MediaCreateWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutPayment_methodInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
