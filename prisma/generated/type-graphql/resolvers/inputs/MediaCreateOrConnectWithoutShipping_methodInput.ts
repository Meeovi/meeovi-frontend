import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutShipping_methodInput } from "../inputs/MediaCreateWithoutShipping_methodInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutShipping_methodInput", {})
export class MediaCreateOrConnectWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: MediaCreateWithoutShipping_methodInput;
}
