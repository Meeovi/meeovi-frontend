import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateManySales_channelInput } from "../inputs/Main_categoryCreateManySales_channelInput";

@TypeGraphQL.InputType("Main_categoryCreateManySales_channelInputEnvelope", {})
export class Main_categoryCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Main_categoryCreateManySales_channelInput], {
    nullable: false
  })
  data!: Main_categoryCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
