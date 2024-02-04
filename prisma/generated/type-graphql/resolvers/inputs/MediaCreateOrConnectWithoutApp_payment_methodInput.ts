import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutApp_payment_methodInput } from "../inputs/MediaCreateWithoutApp_payment_methodInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutApp_payment_methodInput", {})
export class MediaCreateOrConnectWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutApp_payment_methodInput, {
    nullable: false
  })
  create!: MediaCreateWithoutApp_payment_methodInput;
}
