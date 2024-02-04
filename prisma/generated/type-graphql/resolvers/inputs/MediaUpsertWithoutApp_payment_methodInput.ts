import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutApp_payment_methodInput } from "../inputs/MediaCreateWithoutApp_payment_methodInput";
import { MediaUpdateWithoutApp_payment_methodInput } from "../inputs/MediaUpdateWithoutApp_payment_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutApp_payment_methodInput", {})
export class MediaUpsertWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutApp_payment_methodInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutApp_payment_methodInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutApp_payment_methodInput, {
    nullable: false
  })
  create!: MediaCreateWithoutApp_payment_methodInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
