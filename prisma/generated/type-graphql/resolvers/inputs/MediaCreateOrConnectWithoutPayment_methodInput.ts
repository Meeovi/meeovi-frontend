import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutPayment_methodInput } from "../inputs/MediaCreateWithoutPayment_methodInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutPayment_methodInput", {})
export class MediaCreateOrConnectWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutPayment_methodInput, {
    nullable: false
  })
  create!: MediaCreateWithoutPayment_methodInput;
}
