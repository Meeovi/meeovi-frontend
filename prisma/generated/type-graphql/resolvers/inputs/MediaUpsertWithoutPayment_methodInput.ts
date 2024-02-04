import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutPayment_methodInput } from "../inputs/MediaCreateWithoutPayment_methodInput";
import { MediaUpdateWithoutPayment_methodInput } from "../inputs/MediaUpdateWithoutPayment_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutPayment_methodInput", {})
export class MediaUpsertWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutPayment_methodInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutPayment_methodInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutPayment_methodInput, {
    nullable: false
  })
  create!: MediaCreateWithoutPayment_methodInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
